type ListProps<T> = {
    items: T[]
    click: (value: T) => void
}
const List = <T extends { id: number }>({ items, click }: ListProps<T>) => {
    return (
        <div>
            <h2>List iitems</h2>
            {
                items.map((item, index) => {
                    return <div key={item.id} onClick={() => click(item)}>
                        {item.id}
                    </div>
                })
            }
        </div>
    )
}

export default List