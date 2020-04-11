import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NextApiRequest } from 'next';
import Link from 'next/link';

const useStyles = makeStyles({
	root: {
		backgroundColor: 'blue',
		color: 'white'
	}
});

function Index() {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>{'테스트'}</div>
			<Link href={'/test'}>
				<a>{'Go Test'}</a>
			</Link>
		</>
	);
}

Index.getInitialProps = (req: NextApiRequest) => {
	const isSSR = req && true;
	console.log(isSSR);

	return {
		isSSR
	};
};

export default Index;
