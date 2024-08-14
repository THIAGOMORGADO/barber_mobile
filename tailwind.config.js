import { theme } from 'native-base'
import { Colors } from './src/globals/colors'
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
     colors: Colors,
    },
    fontFamily: {
    Regular: ['RobotoSlab_400Regular'],
    Medium: ['RobotoSlab_500Medium'],
    SemiBold: ['RobotoSlab_600SemiBold'],
    Bold: ['RobotoSlab_700Bold'],
  
    
    }
  },
  plugins: [],
}