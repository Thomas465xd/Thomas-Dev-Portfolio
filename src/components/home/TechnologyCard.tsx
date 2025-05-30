type TechnologyCardProps = {
    icon: string; 
    type: string;
    name: string; 
}

export default function TechnologyCard({ icon, type, name } : TechnologyCardProps) {

    console.log(icon, type, name)

    return (
        <div>TechnologyCard</div>
    )
}
