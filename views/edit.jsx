function Edit ({bread, bakers}) {
    return (
        []
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker" defaultValue={bread.baker}>
            {bakers.map((baker) => {
                return(
                    <option value={baker.id} key={baker.id}>{baker.name}</option>
                    
                )
            })}
        </select>
        []
    )
}

//<form action={`/breads/${bread.id}?_method=PUT`} method="POST">
