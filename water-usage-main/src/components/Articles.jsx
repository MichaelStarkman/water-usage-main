import React from "react"
import { useState } from "react"
import { useEffect } from "react"

import ArticlePageTitle from "./articles/ArticlePageTitle.jsx"
import FeaturedArticles from "./articles/FeaturedArticles.jsx"
import ArticleCarousel from "./articles/ArticleCarousel.jsx"

// this is the array of articles
import ArticleIndex from "./articles/ArticleIndex.js"

// the first three articles in the array will be the featured articles
// const featuredArticles = {
// 	primary: ArticleIndex[0],
// 	rightTop: ArticleIndex[1],
// 	rightBottom: ArticleIndex[2]
// }


const Articles = () => {

	const [allArticles, setAllArticles] = useState([])
	const [waterArts, setWaterArts] = useState([]);
	const [energyArts, setEnergyArts] = useState([]);
	const [recycleArts, setRecycleArts] = useState([]);
	const [featureArts, setFeatureArts] = useState([]);

	const categorySort = () => {
		let waterArr = []
		let energyArr = []
		let recycleArr = []
		let featureArr = []
		allArticles.forEach((article) => {
			if (article.category.includes("water")) {
				waterArr.push(article)
			}
			if (article.category.includes('energy')) {
				energyArr.push(article)
			}
			if (article.category.includes("recycle")) {
				recycleArr.push(article)
			}
			if (article.category.includes("feature")) {
				featureArr.push(article)
			}
		})
		setWaterArts(...[waterArr])
		setEnergyArts(...[energyArr])
		setRecycleArts(...[recycleArr])
		setFeatureArts(...[featureArr])
	}

	useEffect(() => {
		setAllArticles([...ArticleIndex])
		// categorySort()s
		let waterArr = []
		let energyArr = []
		let recycleArr = []
		let featureArr = []
		allArticles.forEach((article) => {
			if (article.category.includes("water")) {
				waterArr.push(article)
			}
			if (article.category.includes('energy')) {
				energyArr.push(article)
			}
			if (article.category.includes("recycle")) {
				recycleArr.push(article)
			}
			if (article.category.includes("feature")) {
				featureArr.push(article)
			}
		})
		setWaterArts(...[waterArr])
		setEnergyArts(...[energyArr])
		setRecycleArts(...[recycleArr])
		setFeatureArts(...[featureArr])
	}, [])

	return (
		<>
			<div class="container-lg">
				<div class="row">
					<div class="col ms-3">
						{/* Article Page Header */}
						<ArticlePageTitle />
					</div>
						
				</div>
				<br />
				<div class="row ms-1">
					<div class="col">
						{/* Featuerd Articles -- 3 Articles split into two columns */}
						<FeaturedArticles articles={featureArts}/>
					</div>
				</div>
				<br />
				<div class="row" >
					<div class="col border-bottom border-3 border-dark mb-4" >
						<div class="fs-4">Topics</div>
					</div>
				</div>
				<div class="row">
					<div class="col fs-2 border-bottom border-2 border-secondary mb-4"> Water Conservation</div>
				</div>
				<div class="row">
					<div class="col">
						{/* Carousel will loop through array of all articles in the water category*/}
						<ArticleCarousel articles={waterArts} category="water"/>
					</div>
				</div>
			</div>
			
		</>
	)
}

export default Articles