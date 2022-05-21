import React from "react";
import { defaultColor } from "../colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const Hair1Thumb = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;

	return (
		<svg version="1.1" x="0px" y="0px" viewBox="0 0 182 182">
			<path
				d="m130 43.3v-8.6h-8.7v-8.7h-8.6-8.7-8.7-8.6-8.7-8.7v8.7h8.7 8.7v8.6 8.7 8.7 8.6 8.7 8.7h8.6 8.7v8.6 8.7h8.7v8.7 8.6 8.7 8.7h8.6v8.6h-8.6-8.7v8.7h8.7 8.6v8.7h-8.6-8.7-8.7-8.6v-8.7-8.7h8.6v-8.6-8.7-8.7h-8.6-8.7-8.7v8.7 8.7h8.7v8.6 8.7 8.7 8.6h8.7 8.6v8.7h8.7 8.7 8.6v-8.7h8.7v-8.6h8.7v-8.7-8.7-8.6-8.7-8.7-8.6-8.7-8.7h-8.7v8.7 8.7 8.6h-8.7v-8.6-8.7-8.7-8.6h8.7 8.7v-8.7-8.7-8.6-8.7-8.7z"
				fill="#eaeaea"
			/>
			<path d="m121.3 112.7v8.6h8.7v-8.6-8.7h-8.7z" fill="#b5b5b5" />
			<path d="m121.3 95.3h8.7v8.7h-8.7z" fill="#d8d8d8" />
			<path d="m121.3 86.7v8.6h8.7 8.7v-8.6h-8.7z" fill="#b5b5b5" />
			<path d="m104 121.3v8.7 8.7h-8.7v8.6h8.7 8.7 8.6v-8.6h-8.6v-8.7-8.7-8.6-8.7h-8.7v8.7z" fill="#b5b5b5" />
			<path d="m95.3 104v8.7 8.6 8.7 8.7h8.7v-8.7-8.7-8.6-8.7-8.7h-8.7z" fill="#d8d8d8" />
			<path d="m86.7 173.3h-8.7v8.7h8.7 8.6v-8.7z" fill="#d8d8d8" />
			<path d="m86.7 156v8.7h8.6 8.7 8.7 8.6v-8.7h-8.6-8.7-8.7z" fill="#b5b5b5" />
			<path d="m86.7 147.3v8.7h8.6 8.7v-8.7h-8.7z" fill="#d8d8d8" />
			<path d="m95.3 104h-8.6v8.7 8.6h8.6v-8.6z" fill="#b5b5b5" />
			<path d="m95.3 95.3h-8.6-8.7v8.7h8.7 8.6z" fill="#eaeaea" />
			<path d="m78 95.3h8.7 8.6 8.7v-8.6h-8.7-8.6-8.7z" fill="#b5b5b5" />
			<path d="m69.3 173.3h8.7v8.7h-8.7z" fill="#b5b5b5" />
			<path
				d="m78 164.7v-8.7-8.7-8.6h-8.7v-8.7-8.7h8.7 8.7v-8.6-8.7h-8.7v-8.7-8.6h8.7v-8.7-8.7-8.6-8.7-8.7-8.6h-8.7-8.7v8.6h-8.6v8.7 8.7h-8.7v8.6 8.7 8.7 8.6 8.7h8.7v8.7 8.6 8.7 8.7 8.6 8.7h8.6v8.7 8.6h8.7z"
				fill="#d8d8d8"
			/>
			<path
				d="m69.3 156h-8.6v-8.7-8.6-8.7-8.7-8.6-8.7h-8.7v-8.7-8.6-8.7-8.7-8.6h8.7v-8.7-8.7h8.6v-8.6-8.7h-8.6v8.7h-8.7v8.6h-8.7v8.7h-8.6v8.7 8.6 8.7 8.7 8.6 8.7h8.6v8.7 8.6 8.7 8.7 8.6h8.7v8.7 8.7h8.7v8.6h8.6v-8.6z"
				fill="#b5b5b5"
			/>
			<path d="m43.3 121.3h-8.6v8.7 8.7h8.6v-8.7z" fill="#d8d8d8" />
			<path d="m43.3 112.7v-8.7h-8.6v8.7 8.6h8.6z" fill="#eaeaea" />
			<path
				d="m138.7 8.7v-8.7h-8.7-8.7v8.7h-8.6-8.7-8.7-8.6v8.6h-8.7-8.7-8.6-8.7v8.7h-8.7v8.7 8.6 8.7h-8.6v8.7 8.6 8.7 8.7 8.6 8.7h8.6 8.7v-8.7-8.6h8.7v-8.7-8.7-8.6h8.6v-8.7h8.7 8.7 8.6 8.7 8.7 8.6 8.7v8.7h8.7v-8.7h8.6v-8.7-8.6-8.7-8.7-8.6z"
				fill={color1}
			/>
			<g fill={color2}>
				<path d="m52 52v8.7h-8.7v8.6 8.7 8.7h8.7 8.7v-8.7-8.7-8.6h8.6v-8.7h-8.6z" />
				<path d="m86.7 17.3h-8.7-8.7-8.6v8.7 8.7 8.6h8.6 8.7v-8.6-8.7h8.7z" />
				<path d="m130 34.7v8.6h-8.7-8.6-8.7v8.7h8.7 8.6 8.7v-8.6h8.7v-8.7z" />
				<path d="m86.7 34.7h8.7v8.7h-8.7z" />
			</g>
			<path d="m112.7 26h8.7v8.7h-8.7z" fill={color3} />
			<path d="m86.7 26h8.7v8.7h-8.7z" fill={color3} />
			<path
				d="m86.7 43.3v-8.6h-8.7v8.6h-8.7-8.6v-8.6-8.7-8.7h-8.7v8.7h-8.7v8.7 8.6 8.7h-8.6v8.7 8.6 8.7 8.7 8.6 8.7h8.6 8.7v-8.7-8.6h-8.7v-8.7-8.7-8.6h8.7v-8.7h8.7 8.6 8.7 8.7 8.6 8.7v-8.7h-8.7z"
				fill={color3}
			/>
			<path d="m104 34.7h8.7v8.7h-8.7z" fill={color3} />
		</svg>
	);
};

export default Hair1Thumb;
