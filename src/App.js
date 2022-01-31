// import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';

import Layout from './components/layout/Layout';
import ShoppingItemType from './components/shopping/ShoppingItemType';
import { ShoppingDashboard } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

const ITEM_SIZES = [
  { name: 'xs', type: 'xsmall' },
  { name: 'S', type: 'small' },
  { name: 'M', type: 'medium' },
  { name: 'ML', type: 'mlarge' },
  { name: 'L', type: 'large' },
  { name: 'XL', type: 'xlarge' },
  { name: 'XXL', type: 'xxlarge' },
]

function App() {

  return (
    <Provider store={store}>
      <Layout>
        <div className="mainDivider">
          <div className="leftSideBar">
            <div className="typeSelection">
              {
                ITEM_SIZES.map(item => {
                  return <ShoppingItemType key={item.name} type={item.type} name={item.name} />
                })
              }
            </div>
          </div>
          <div className="rightSideBar">
            {
              //  <ShoppingDashboard />
            }
            {
              // <HookCakeContainer />

              // <CakeContainer />
              // <IceCreamContainer />
              // <NewCakeContainer />

              // <ItemContainer cake />
              // <ItemContainer />
            }
            <UserContainer />
          </div>
        </div>
      </Layout>
    </Provider>
  )
}

export default App;
