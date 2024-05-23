import css from "./List.module.css"
import {Sort_Fal} from "iconview/svgs/Sort_Fal";
import {Circle_Plus_Fal} from "iconview/svgs/Circle_Plus_Fal";
import {Circle_Plus_Far} from "iconview/svgs/Circle_Plus_Far";
import {User_Plus_Far} from "iconview/svgs/User_Plus_Far";
import {Caret_Right_Fas} from "iconview/svgs/Caret_Right_Fas";
import {Circle_Far} from "iconview/svgs/Circle_Far";
import {Plus_Far} from "iconview/svgs/Plus_Far";
import {Tag_Far} from "iconview/svgs/Tag_Far";
import {Pen_Far} from "iconview/svgs/Pen_Far";
import {Calendar_Circle_Plus_Far} from "iconview/svgs/Calendar_Circle_Plus_Far";
import {Flag_Swallowtail_Far} from "iconview/svgs/Flag_Swallowtail_Far";
import {Ellipsis_Fas} from "iconview/svgs/Ellipsis_Fas";

export default function List(){
	return(
		<div className={css.list_container}>
			
			<table className={css.table}>
				
				<tr>
					<th>
						<input type="checkbox"/>
					</th>
					<th>Name <Sort_Fal /> </th>
					<th>Assign <Sort_Fal /> </th>
					<th>Due Date <Sort_Fal /> </th>
					<th>Priority <Sort_Fal /> </th>
					<th> <Circle_Plus_Far /> </th>
				</tr>
				
				<tr className={css.row}>
					<td className={css.check_single}><input type="checkbox"/></td>
					<td>
						<div className={css.name_info}>
							<Caret_Right_Fas/>
							<Circle_Far/>
							<p> Manager / Team Lead WELCOME! 🎉</p>
						</div>
						
						<div className={css.name_icon}>
							<Plus_Far />
							<Tag_Far />
							<Pen_Far />
						</div>
					
					</td>
					<td><User_Plus_Far/></td>
					<td><Calendar_Circle_Plus_Far /> </td>
					<td> <Flag_Swallowtail_Far /> </td>
					<td><Ellipsis_Fas /></td>
				</tr>
			
			
			</table>
			
			
			{/*<div className={`${css.list} ${css.head}`}>*/}
			{/*	<div className="1">1</div>*/}
			{/*	<div className="1">Name</div>*/}
			{/*	<div className="1">Assign</div>*/}
			{/*	<div className="1">Due date</div>*/}
			{/*	<div className="1">Priority</div>*/}
			{/*	<div className="1">+</div>*/}
			{/*</div>*/}
		</div>
	)
}
