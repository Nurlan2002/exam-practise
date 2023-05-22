import AddArtist from "../pages/AddArtist";
import ArtisEdit from "../pages/ArtisEdit";
import Artist from "../pages/Artist";
import ArtistDetail from "../pages/ArtistDetail";
import Home from "../pages/Home";
import MainRoots from "../pages/MainRoots";
import NotFound from "../pages/NotFound";



export const ROUTES=[
    {
        path:'/',
        element:<MainRoots/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'artists',
                element:<Artist/>
            },
            {
                path:'add-artist',
                element:<AddArtist/>
            },
            {
                path:'artist/:id',
                element:<ArtistDetail/>
            },
            {
                path:'artist/edit/:id',
                element:<ArtisEdit/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }

]