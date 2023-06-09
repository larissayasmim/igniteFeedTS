import { PencilLine} from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
            <aside className={styles.sidebar} >
                <img 
                    className={styles.cover} 
                    src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                />

                <div className={styles.profile} >
                    
                    <Avatar src="https://media.licdn.com/dms/image/C4D03AQERmfk_iV-dgg/profile-displayphoto-shrink_400_400/0/1587567528318?e=1689206400&v=beta&t=BcO-DZLebHdI_SJdwoW5X9ojuehH31X57bjRMo6Vki0" />

                    <strong>Larissa Yamim</strong>
                    <span>Web Developer</span>
                </div> 

                <footer>
                    <a href="#">
                    <PencilLine size={20}/>  
                        Editar seu Perfil
                    </a>
                </footer>

            </aside>
    );
}