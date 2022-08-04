import { createAction } from '@reduxjs/toolkit'

export const productList = createAction('PRODUCT_LIST');
// export const products = createAction('PRODUCTS');
// export const product = createAction('PRODUCT');

export const fetchProductList = () => {
	// return dispatch => {
		// dispatch(productList());
		// return productReleasesService.getProductReleases().then(
		// 	productReleases => dispatch(productReleasesFetched({ productReleases }))
		//   ).catch(error => {
		// 	error.clientMessage = "Can't get product releases";
		// 	dispatch(productReleasesFetchingError({ error }))
		//   });
		// }
};