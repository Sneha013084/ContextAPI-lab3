
import  {useContext} from "react";
import { FilterContext, type Filter } from "../contexts/FilterContext";


export default function FilterButtons () {

    // used context to access the current filterstate
    const filterContext = useContext (FilterContext)

     if (!filterContext) throw new Error("FilterButtons must be used within FilterProvider");

// possible filter options

     const filters: Filter[] =['all' , 'active', 'completed'];


     //rendering the filterbuttons ; the map function take the filter array and and take value f for each filter and returns aa element button (button for the key{f}) and when click that button it calls the setFilter function from the filterContext

     return(

        <div>
           { filters.map(f => ( <button key={f} onClick={() => filterContext.setFilter(f)}> {f} </button>))}


        </div>
     
    )

}
