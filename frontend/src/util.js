export const tweetStream = (data) => (
    $.ajax({
        url: "/tweets",
        method: "GET",
        data: data
    })
)
