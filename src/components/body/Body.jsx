import {
    Audience,
    ConnectionWithInnovationCenter,
    EventIntro, Guidance,
    NecessityOfEvent,
    ParticipationForm, RoadMap,
    Specialized, Supporters,
} from '../index'



const Body = () => {
    return (
        <div>
            <EventIntro/>
            <NecessityOfEvent/>
            <ConnectionWithInnovationCenter/>
            <Specialized/>
            <RoadMap/>
            <Audience/>
            <ParticipationForm/>
            <Guidance/>
            <Supporters/>


        </div>
    )
}
export default Body;