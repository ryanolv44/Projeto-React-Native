import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import FinancesScreen from './screens/FinancesScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tasks: TasksScreen,
    Finances: FinancesScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);
