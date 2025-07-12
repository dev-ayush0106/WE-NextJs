export default function ProductReview({params}){
    const {productId,reviewId}=params
    return(
        <h1>Review {reviewId} of Product Id {productId} </h1>
    )
}