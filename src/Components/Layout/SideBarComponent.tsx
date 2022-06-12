import { useState, useCallback, memo,useEffect } from "react";
import { Container } from "react-bootstrap";


const SidebarComponent = () => {

  

    const [showMenu, setShowMenu] = useState(true);

    const MemoFunctions = useCallback(() => {
        setShowMenu(!showMenu)
    }, [showMenu])

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 400px)");
        mql.addEventListener("change", resize);
        function resize(e :any) {
            if (e.matches)
                setShowMenu(false)
        }
        return () => {
            mql.removeEventListener("change", resize);
        }
    },[]);

    return(
        <>
        <div className={`sidebar border-t border-gray-700 ${showMenu === true  ? 'showMenu' : 'close'}`}>
                <div className="logo-details">
                <label className="MenuHanbButton" htmlFor="check">
                            <input type="checkbox" id="check" value={showMenu === true ? 'cheked' : 'uncheked'} onChange={MemoFunctions} />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                </div>
                <ul className="nav-links">
                    <li className="rounded hover:bg-gray-700 hover:text-gray-300">
                        <a href="#">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Dashboard</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Category</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a href="#">
                                <i className='bx bx-collection' ></i>
                                <span className="link_name">Category</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Category</a></li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">PHP & MySQL</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a href="#">
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Posts</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Posts</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Login Form</a></li>
                            <li><a href="#">Card Design</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="link_name">Analytics</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Analytics</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-line-chart' ></i>
                            <span className="link_name">Chart</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Chart</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a href="#">
                                <i className='bx bx-plug' ></i>
                                <span className="link_name">Plugins</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Plugins</a></li>
                            <li><a href="#">UI Face</a></li>
                            <li><a href="#">Pigments</a></li>
                            <li><a href="#">Box Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-compass' ></i>
                            <span className="link_name">Explore</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Explore</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-history'></i>
                            <span className="link_name">History</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">History</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog' ></i>
                            <span className="link_name">Setting</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Setting</a></li>
                        </ul>
                    </li>
                    <li>
                    <div className="profile-details ">
                        <Container fluid={true}>                        
                            <div className="name-job text-center">
                                <div className="profile_name text-center">Watter De Aza</div>
                                <div className="job text-center">FullStack Developer</div>
                            </div>                        
                        </Container>
                        </div>
                    </li>
                </ul>
            </div>
        
        
        </>
    )
}

export default memo(SidebarComponent);