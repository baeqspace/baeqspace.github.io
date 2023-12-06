import { useContext } from "react"
import AuthService from "../services/AuthService"
import { NavBarItem } from "./NavBarItem"
import { AuthContext } from "../contexts/AuthContext"

export function NavBar() {
    const [authUser, setAuthUser, checkAuth] = useContext(AuthContext)

    return (
        <nav className="navbar">
            <NavBarItem symbol='home' link={`/profile/${authUser?.id}`} text='Мой профиль' />
            <NavBarItem symbol='forum' link='/chats' text='Мои чаты' />
            <NavBarItem symbol='person' link={`/friends/${authUser?.id}`} text='Мои друзья' />
            <NavBarItem symbol='group' link={`/groups/${authUser?.id}`} text='Мои группы' />
            <NavBarItem symbol='photo_camera' link={`/photos/${authUser?.id}`} text='Мои фото' />
            <NavBarItem symbol='videocam' link={`/videos/${authUser?.id}`} text='Мои видео' />
            <NavBarItem symbol='music_note' link={`/music/${authUser?.id}`} text='Моя музыка' />
            <NavBarItem onClick={async () => {await AuthService.logout();checkAuth()}} style={{position: 'absolute', left: 20, bottom: 20, width: 'calc(100% - 40px)'}} symbol='logout' link='' text='Выйти'/>
        </nav>
    )
}