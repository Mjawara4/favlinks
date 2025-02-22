import Table from './Table'
import Form from './Form'
import { useState } from 'react'

function LinkContainer(){

    const [favLinks, setFavLinks] = useState([])

    const handleRemove = (index) => {
        /*
                TODO - Create logic for setting the state to filter array and remove favLink at index
            */

        let newArray = favLinks
        newArray.pop(favLink)
        setFavLinks(newArray)
      }
    
    const handleSubmit = (favLink) => {
        /*
                TODO - Create logic to set state and add new favLink to favLinks array in state
           */
        setFavLinks([...favLinks, favLink])


      }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table data= {favLinks} />
            <h1>Add New</h1>
            <Form submitNewLink={handleSubmit} />
        </div>
    )

}
export default LinkContainer