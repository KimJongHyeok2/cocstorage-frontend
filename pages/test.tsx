import React from 'react';
import Link from "next/link";

function Template() {
	return (
		<>
			<div>Template</div>
			<Link href={'/'}>
				<a>{'Go Index'}</a>
			</Link>
		</>
	);
}

export default Template;
