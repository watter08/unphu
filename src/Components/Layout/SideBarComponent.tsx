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
                        <a href="/Dashboard">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Dashboard</span>
                        </a>
                    </li>
                    <li className="rounded hover:bg-gray-700 hover:text-gray-300">
                        <a href="/UserList">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Lista Usuario</span>
                        </a>
                    </li>
                    <li className="rounded hover:bg-gray-700 hover:text-gray-300">
                        <a href="/UsersForm">
                            <i className='bx bx-grid-alt' ></i>
                            <span className="link_name">Agregar Usuario</span>
                        </a>
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