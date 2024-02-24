export default function Button(props){
    //...props used to spread on native built-in 'button', collected from 'Button' component
    return <button className="px-4 py-2 text-xs md:text-base rounded-md text-stone-400 bg-stone-700 hover:bg-stone-600 hover:text-stone-100" {...props}>{props.children}</button>
}