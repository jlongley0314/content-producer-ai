import React from "react";
import {
	Avatar,
	Table,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import { formStyles } from "../../../assets/styles/formStyles";
import { images } from "../../../constants";

function useTableWithImage(records, headCells) {
	const classes = formStyles();

	const TblContainer = (props) => (
		<Table className={classes.table}>{props.children}</Table>
	);

	const TblHead = (props) => {
		return (
			<TableHead>
				<TableRow>
					{headCells.map((cell) => (
						<TableCell key={cell.id}>
							{cell.type == "text" ? (
								cell.label
							) : (
								<Avatar
									alt={cell.id}
									src={
										cell.label == "image1"
											? images.avatar2.default
											: images.avatar1.default
									}
								/>
							)}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
		);
	};

	return {
		TblContainer,
		TblHead,
	};
}

export default useTableWithImage;
