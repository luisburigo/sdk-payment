import {trpc} from "@/config/trpc";

function Cards() {
    const {data: cards} = trpc.myCards.useQuery();

    return <div>asd</div>
}

export default Cards;