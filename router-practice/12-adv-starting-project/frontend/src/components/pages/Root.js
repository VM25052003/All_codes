import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../MainNavigation";

export default function Root() {
    //Hook to find whether transition is currently active, loading data or inactive
    const navigation = useNavigation()
    return (
    <>
    <MainNavigation />
    {navigation.state === 'loading' && <p>Loading...</p>}
    <main><Outlet /></main>
    </>
    )
}