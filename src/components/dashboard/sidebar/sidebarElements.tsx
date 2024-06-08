import User from "@/components/icons/User"
import Condition from "@/components/icons/condition"
import Contact from "@/components/icons/contact"
import Home from "@/components/icons/home"
import Hospital from "@/components/icons/hospital"
import Timer from "@/components/icons/timer"
import Tirage from "@/components/icons/tirage"
import Vilage from "@/components/icons/vilage"
import Flight from "@/components/icons/flight"

type sideBar={
    name:string,
    link:string,
    icon:JSX.Element
}


export let wilayaElements:sideBar[]=[
    // {
    //     name:"Home",
    //     link:"",
    //     icon:<Home/>
    // },
    // {
    //     name:"Candidat",
    //     link:"/candidat",
    //     icon:<User/>
    // },
    {
        name:"Communes",
        link:"/communes",
        icon:<Vilage/>
    },
  {
    name:"Hospitals",
    link:"/hospitals",
    icon:<Hospital/>
},
{
  name:"Banks",
  link:"/banks",
  icon:<Vilage/>
},

]

export let communeElements=[
    // {
    //     name:"Home",
    //     link:"",
    //     icon:<Home/>
    // },
    {
        name:"Candidat",
        link:"/candidat",
        icon:<User/>
    },
    // {
    //     name:"Commune",
    //     link:"/commune",
    //     icon:<Vilage/>
    // },
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
    // {
    //     name:"Candidat",
    //     link:"/candidat",
    //     icon:<User/>
    // },
    {
        name:"Wilaya",
        link:"/wilayas",
        icon:<Vilage/>
    },
    {
      name:"Flights",
      link:"/flights",
      icon:<Flight/>
    },
    {
        name:"Contact us",
        link:"/contactus",
        icon:<Contact/>
    }
]