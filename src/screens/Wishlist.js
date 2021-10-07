import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import CustomText from '../components/Text/CustomText'
import AnimatedLottieView from 'lottie-react-native';
import { scale } from '../utils/fonts';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
export default function Wishlist({navigation:{navigate}}) {
	return (

		<SafeAreaView style = {styles.parentLayout}>
			<CustomText 
				text= "Your Wishlist"
				variant ="h2"
				bold
				style ={{paddingVertical:'8%', letterSpacing:-1.5 ,width:w , paddingHorizontal:'4%'}}
			/>

			<View style ={styles.empty}>
				<AnimatedLottieView 
					source={require('../assets/json/wishlist.json')}
					autoPlay
					
					loop
				/>
				
				<CustomText 
					gray
					style ={{width:w/1.3, lineHeight:18,letterSpacing:-0.5, textAlign:'center', marginVertical:'20%'}}
					variant= 'small'
					text= "Add items to your wishlist to get notified when they are back in stock."
				/>
				
			</View>
			<View style ={styles.button}>
				<CustomText
					text= "Shop Now"
					white
					variant = "subtext"
					style ={{letterSpacing:-0.5}}
					/>
				</View>
		</SafeAreaView>
		
	)
}
const styles = StyleSheet.create({
	parentLayout: {
		padding:'4%',
		flex:1,
		justifyContent:'flex-start',
		alignItems:'center',
	},

	empty:{
		width:w,
		height:'60%',
		backgroundColor:'#EBEBEB',
		marginTop:'10%',
		justifyContent:'flex-end',
		alignItems:'center',
	},

	button:{
		width:w/2.5,
		backgroundColor:'black',
		alignItems:'center',
		padding:'3%',
		borderRadius:scale(10),

	},
});
