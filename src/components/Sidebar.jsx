import React from 'react'
import sublinks from '/src/components/Data'
import { useGlobalContext } from './contextApi';
import closeicon from '../images/icons8-cancel-64.png'


const Sidebar = () => {
    
    const {isSidebarOpen,closeSidebar} = useGlobalContext();
    return (
        <aside className={`${isSidebarOpen? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <div className="sidebar">
                <button className='close-btn' onClick={closeSidebar}>
                    <img src={closeicon} alt='X' width="40px" heigth="40px"/>
                </button>

                <div className="sidebar-links">
                    {sublinks.map((item,index) => {
                        const {links,page} = item;
                        return (
                        <article key={index}> 
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((link,index)=>{
                                const {url, icon, label} = link;
                                return (
                                    <a key={index} href={url}>
                                        {icon}
                                        {label}
                                    </a>
                                )
                                })}
                            </div>
                        </article>
                        )
                    })}
                </div>
            </div>

        </aside>
    )

}

export default Sidebar 