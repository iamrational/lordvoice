import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/SearchInput";
export default function Home(){
  return (  
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px', gap:'10px'}}>
    
      <form role="search">
        <SearchInput/>
      </form>
   
   
    <Button> Conquest </Button>
    <Button size="sm"> small </Button>
    <Button size="lg"> large </Button>
    <Button size="icon">i</Button>
    <Button variant={"destructive"}> cancel </Button>
    <Button variant={"ghost"}> ghost </Button>
    <Button variant={"outline"}> Outline </Button>
    <Button variant={"secondary"}> secondary </Button>
    <Button variant={"destructive"}> </Button>

    </div>

  );
}


