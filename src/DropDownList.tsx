import React, {ChangeEvent, useState} from "react";
import {NamesType} from "./App";
import {Input, List} from "@material-ui/core";

type NamesPropsType = {
    list: Array<NamesType>
}

export function DropDownList(props: NamesPropsType) {

    const [isActive, setIsActive] = useState<boolean>(false)
    const [value, setValue] = useState('')

    const activateSearch = () => setIsActive(true)
    const deactivateSearch = () => {
        setIsActive(false)
        setValue('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
        setTimeout (() => setValue(e.target.value), 1000)
    }
    const filteredNames = props.list.filter(l => l.name.toLowerCase().includes(value.toLowerCase()))
    const namesEls = filteredNames.map(n => <List key={n.id}>{n.name}</List>)

    return isActive
        ? <div>
            <Input
                onBlur={deactivateSearch}
                autoFocus
                onChange={onChangeHandler}
            />
            <div>
                {namesEls}
            </div>
        </div>
        : <Input
            onClick={activateSearch}
            placeholder='Search in the people'
        />
}