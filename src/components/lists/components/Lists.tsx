import { useCallback, useRef, useState } from "react";
import { Box, Button, List, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "redux/store"
import { createList, setActiveListIndex } from "redux/listSlice";
import ListItem from "./ListItem";
import AddIcon from '@mui/icons-material/Add';

type Props = {}

export default function Lists({ }: Props) {
	const dispatch = useDispatch();

	const { lists, activeIndex } = useSelector((state: AppState) => ({
		lists: state.listSlice.lists,
		activeIndex: state.listSlice.activeList
	}));
	const addItemRef = useRef<HTMLButtonElement>(null)

	const [displayNewListItem, setDisplayNewListItem] = useState<boolean>(false)
	const [newListName, setNewListName] = useState<string>("")

	// field change handler
	const handleNewListChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewListName(e.target.value)
	}

	// when key down while input is is foucs
	const onkeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// if the key which presses isn't enter stop here
		if (e.key !== "Enter") return;

		onAddItemClicked()

	}

	// when input loses foucs
	const onInputLoseFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		// id we clicked on the "add item button" do nothing and let the button event handle it
		if (e.relatedTarget === addItemRef.current) return;

		// clicked somewhere else? hide input be keep value for late use
		setDisplayNewListItem(false);
	}

	// when list item clicked
	const onListItemClicked = useCallback((index: number) => {
		dispatch(setActiveListIndex(index))
	}, []);

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
		<Box width="300px" height="100vh">
			<Box sx={{ bgcolor: "primary.main", padding: "50px 20px 0", zIndex: 10 }} paddingTop={1} position={"fixed"} width="300px" height="100%">
				<Typography variant="h2">
					My lists
				</Typography>

				<Box>
					<List>
						{
							lists.length === 0
								? <Typography variant="body1">
									No lists, add new one now!
								</Typography>
								: (
									lists.map((list, index) => <ListItem
										key={list.id}
										title={list.title}
										index={index}
										isActive={index === activeIndex}
										numTasks={list.tasks.length}
										onClick={onListItemClicked}
									/>)
								)}

						<Box textAlign="center">
							{displayNewListItem && <TextField color="secondary" placeholder="New list" autoFocus value={newListName} onChange={handleNewListChagne} onBlur={onInputLoseFocus} onKeyDown={onkeyDownHandler} />}
						</Box>
					</List>

					<Box textAlign="center">
						<Button color="secondary" variant="text" startIcon={<AddIcon />} onClick={onAddItemClicked} ref={addItemRef}>
							{displayNewListItem ? "Add item" : "New List"}
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}