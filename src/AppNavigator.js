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
  }
);

export default createAppContainer(AppNavigator);
