import User from "@/components/icons/User"
import Condition from "@/components/icons/condition"
import Contact from "@/components/icons/contact"
import Home from "@/components/icons/home"
import Timer from "@/components/icons/timer"
import Tirage from "@/components/icons/tirage"
import Vilage from "@/components/icons/vilage"

type sideBar={
    name:string,
    link:string,
    icon:JSX.Element
}


export let wilayaElements:sideBar[]=[
    {
        name:"Home",
        link:"",
        icon:<Home/>
    },
    {
        name:"Candidat",
        link:"/candidat",
        icon:<User/>
    },
    {
        name:"Wilaya",
        link:"/wilaya",
        icon:<Vilage/>
    },
    {
        name:"Communes",
        link:"/commune",
        icon:<Vilage/>
    },
    {
        name:"Tirage",
        link:"/tirage",
        icon:<Tirage/>
    }
]

export let communeElements=[
    {
        name:"Home",
        link:"",
        icon:<Home/>
    },
    {
        name:"Candidat",
        link:"/candidat",
        icon:<User/>
    },
    {
        name:"Commune",
        link:"/commune",
        icon:<Vilage/>
    },
    {
        name:"Tirage",
        link:"/tirage",
        icon:<Tirage/>
    }
]

export let adminElements:sideBar[]=[
    {
        name:"Home",
        link:"",
        icon:<Home/>
    },
    {
        name:"Conditions",
        link:"/conditions",
        icon:<Condition/>
    },
    {
        name:"Timer",
        link:"/timer",
        icon:<Timer/>
    },
    {
        name:"Candidat",
        link:"/candidat",
        icon:<User/>
    },
    {
        name:"Wilaya",
        link:"/wilaya",
        icon:<Vilage/>
    },
    {
        name:"Communes",
        link:"/commune",
        icon:<Vilage/>
    },
    {
        name:"Tirage",
        link:"/tirage",
        icon:<Tirage/>
    },
    {
        name:"Contact us",
        link:"/contactus",
        icon:<Contact/>
    }
]