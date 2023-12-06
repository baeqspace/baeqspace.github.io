import { Link, Routes, Route, Navigate } from "react-router-dom";
import { NavBarItem } from "../components/NavBarItem";
import { NavBar } from "../components/NavBar";
import { ProfilePage } from "./ProfilePage";
import { FriendsPage } from "./FriendsPage";
import { ChatsPage } from "./ChatsPage";
import { ChatPage } from "./ChatPage";
import { MediaPage } from "./MediaPage";
import { AllMedia } from "../components/AllMedia";
import { GroupPage } from "./GroupPage";
import { AllFriends } from "./AllFriends";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Main() {
    const [authUser] = useContext(AuthContext)

    if (!authUser) return

    return (
        <main className="main">
            <Routes>
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/friends/:id" element={<FriendsPage />}/>
                <Route path="/allFriends" element={<AllFriends/>} />
                <Route path="/groups/:id" element={<FriendsPage groups/>} />
                <Route path="/groups/group/:id" element={<GroupPage/>}/>
                <Route path="/allGroups" element={<AllFriends groups/>}/>
                <Route path="/chats" element={<ChatsPage />}/>
                <Route path="/chats/:id" element={<ChatPage />}/>
                <Route path="/photos/:id/*" element={<MediaPage type="photos"/>}/>
                <Route path="/allPhotos/*" element={<AllMedia type="photos"/>}/>
                <Route path="/videos/:id/*" element={<MediaPage type="videos"/>} />
                <Route path="/allVideos/*" element={<AllMedia type="videos"/>}/>
                <Route path="/music/:id/*" element={<MediaPage type="music"/>} />
                <Route path="/allMusic/*" element={<AllMedia type="music"/>}/>
                <Route path="*" element={<Navigate to={`/profile/${authUser?.id}`} />}/>
            </Routes>
            <NavBar />
        </main>
    )
}