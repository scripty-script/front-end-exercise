export default function Throwback({ title, href }) {
    return (
        <div>
            <img src={href} alt={title} className="object-cover border border-white rounded-lg max-h-[26rem] h-full w-[25rem]" />
            <span className="sr-only">{title}</span>
        </div>
    )
}