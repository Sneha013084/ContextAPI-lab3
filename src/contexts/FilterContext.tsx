
import React, { createContext, useState } from "react";

// current value of filter

export type Filter = 'all' | 'active' | 'completed';

//function to update the filter

interface FilterContextType {
    filter :Filter;
    setFilter :(filter:Filter) =>void;
}
    //creat a react context with undefined value

    export const FilterContext = createContext <FilterContextType | undefined > (undefined);


    //filterprovider

    export const FilterProvider:React.FC < {children : React.ReactNode} > = ({children}) =>{
        const [ filter, setFilter] = useState <Filter> ('all');

        //wrap all inside the provider

        return (
            <FilterContext.Provider value = {{filter, setFilter}}>
                {children}
            </FilterContext.Provider>

        )

    }

