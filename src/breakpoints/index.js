const size = {
	mobileS: '720px',
	mobileM: '375px',
	mobileN: '391px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '256px',
	unkwnow: '741px',
};

export const device = {
	mobileS: `(max-width:${size.mobileS})`,
	mobileM: `(min-width:${size.mobileM})`,
	mobileL: `(min-width:${size.mobileL})`,
	tablet: `(min-width:${size.tablet})`,
	laptop: `(min-width:${size.laptop})`,
	laptopL: `(min-width:${size.laptopL})`,
	desktop: `(min-width:${size.desktop})`,
	mobileN: `(min-width:${size.mobileN})`,
};
