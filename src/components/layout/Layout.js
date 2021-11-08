import layoutCSS from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return (
        <div >
            <MainNavigation />
            <main className={layoutCSS.main}>
            {props.children}
            </main>
        </div>
    )

}

export default Layout;