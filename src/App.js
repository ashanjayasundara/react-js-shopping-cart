// import logo from './logo.svg';
import './App.css';

import Layout from './components/layout/Layout';
import ShoppingItemType from './components/shopping/ShoppingItemType';
import { ShoppingDashboard } from './pages';

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
          <ShoppingDashboard />
        </div>
      </div>
    </Layout>
  )
}

export default App;
