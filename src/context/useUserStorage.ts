import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define o tipo para os dados do usuário
interface User {
  name: string;
  email: string;
  password: string;
}

const useUserStorage = () => {
  const [user, setUser] = useState<User | null>(null);

  // Função para salvar os dados do usuário no AsyncStorage
  const saveUser = async (name: string, email: string, password: string) => {
    try {
      const userData = { name, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

  // Função para carregar os dados do usuário do AsyncStorage
  const loadUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
    }
  };

  // Função para limpar os dados do usuário do AsyncStorage
  const clearUser = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Erro ao limpar usuário:', error);
    }
  };

  return {
    user,
    saveUser,
    loadUser,
    clearUser,
  };
};

export default useUserStorage;
