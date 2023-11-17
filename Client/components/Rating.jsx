import { Text } from "react-native";

function Rating({ rating }) {
    const total = 5;
    let empty = total - Math.floor(rating);
    const emptyStar = '☆';
    const star = '★';
    const stars = star.repeat(rating) + emptyStar.repeat(empty);

    return (
        <Text style={{padding: 10, fontSize: 24, color: "#3483fa"}}>{stars}</Text>
    )
}

export default Rating