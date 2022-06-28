import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client=sanityClient({
    //projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId:'aku59a80',
    dataset:'production',
    appVersion:'2022-05-14',
    useCdn:true,
   // token: process.env.REACT_APP_SANITY_TOKEN,
    token:'skMH9U9OhXWS3l7rcOmmzy4vtFrLPnx6OQVX5ZIVuK9rqTYmHJWZ1SSzDgGahECGaG86uCFfFgnKLklqjK3RZn6DOdIjFmVyGCv4FtLZp0tur1uHEihKFRWuijlNPKZFyMMV0P7xw1HZpixm6XvtcBc8CTJK6VVrHCQPk6JrW4AvgEdoGcdA',
});

const builder= imageUrlBuilder(client);

export const urlFor= (source)=> builder.image(source);