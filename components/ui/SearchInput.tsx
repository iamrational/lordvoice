import{Input} from  "./input";
import{Button} from "./button";
import{Ghost, Search} from "lucide-react"

type Props = {
    placeholder?: string,
}

export function SearchInput({placeholder}:Props){
    return(

        <div className="border rounded-lg flex justify-between items-center">
            <Input
            type="text"
            placeholder={placeholder || "search"}
            className="border-none"
           />
           <Button variant={"ghost"} size={"icon"}>
            <Search />
            <span className="sr-only">search button</span>

           </Button>
        </div>



    )






}