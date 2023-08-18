import { useRef, useState } from "react";
import { Box, Button, List, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "redux/store"
import { createList, setActiveList } from "redux/listSlice";
import ListItem from "./ListItem";

type Props = {}

export default function Lists({ }: Props) {
	const dispatch = useDispatch();
	const lists = useSelector((state: AppState) => state.listSlice.lists);
	const addItemRef = useRef<HTMLButtonElement>(null)

	const [displayNewListItem, setDisplayNewListItem] = useState<boolean>(false)
	const [newListName, setNewListName] = useState<string>("")

	// field change handler
	const handleNewListChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewListName(e.target.value)
	}

	// when input loses foucs
	const onInputLoseFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		// id we clicked on the "add item button" do nothing and let the button event handle it
		if (e.relatedTarget === addItemRef.current) return;

		// clicked somewhere else? hide input be keep value for late use
		setDisplayNewListItem(false);
	}

	// when list item clicked
	const onListItemClicked = (index: number) => {
		dispatch(setActiveList(index))
	}

	// add item clicked
	const onAddItemClicked = () => {
		const listName = newListName;

		// if field is hidden display it
		if (!displayNewListItem) {
			return setDisplayNewListItem(true)
		}

		// if field is empty hide field
		if (!listName) {
			return setDisplayNewListItem(false)
		}

		// here field is not hidden, and not empty, add item
		dispatch(createList(listName))

		// reset the field value
		setNewListName("");
		setDisplayNewListItem(false);
	}

	return (
		<Box sx={{ bgcolor: "primary.light", p: 0, mb: 1 }} width="300px" height="100vh">
			<Typography variant="h2">
				My lists
			</Typography>

			<Box>
				<List>
					{lists.map((list, index) => <ListItem
						key={list.id}
						title={list.title}
						index={index}
						numTasks={list.tasks.length}
						onClick={onListItemClicked}
					/>)}

					{displayNewListItem && <TextField placeholder="New list" autoFocus value={newListName} onChange={handleNewListChagne} onBlur={onInputLoseFocus} />}
				</List>

				<Box>
					<Button ref={addItemRef} onClick={onAddItemClicked}>Add Item</Button>
				</Box>
			</Box>
		</Box>
	)
}