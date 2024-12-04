import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import 'react-native-get-random-values';

export default function RenderByCategory({ navigation, route }) {
    const paramData = route?.params;

    const screens = [
        {
            id: 0,
            title: 'Screen 5',
            data: [
                { uri: 'https://via.placeholder.com/150', title: 'Item One', price: '1300' },
                { uri: 'https://via.placeholder.com/150', title: 'Item Two', price: '2300' },
            ],
        },
        {
            id: 1,
            title: 'Men',
            data: [
                {
                    uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQArODHMQrqqvpfWJOv_TwcStKiWFOA75oE7jQ4tpC6H1x1tkS6ZInp0_XpwxghPbtOYx8fQFpL8PChSzisgVoRlxgbnvar-vGkS-RiH_sm7LSmb5aooUeV_d-tc9Sdq24p3J-6bjHb&usqp=CAc',
                    title: 'Zara - Abstract Print Shirt - Navy Blue - L - Male', price: '3550', key: 0
                },

                {
                    uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXlMJ4YG_rwIKVH3WZxRNn8iXKf_Sja9IIGnVaEf8uyN2V4Arx81FOfFKSJEfOoBQ56ffvMbxie9xNdhGYb1WPzsPdRaQyHn1_iEMcAU6AjQGnc4_ieNaej166st4-&usqp=CAc',
                    title: 'NORTHWIND Mens High Turtle Neck Cotton T-Shirt ', price: '1990', key: 1
                },

                {
                    uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHwt_4upyrcRtbzrpYAB7mp6VjoM5mMgYbpXv1Rqfbv7hM6Bw2yf3pvOaYj7BZtlbgLpAUZg1uDOw1i8IRpZS7nCOqc3P3Unaw27_XifzXVf9ushg4JB-0-eYsea0quy3C4GDTTHqHzao&usqp=CAc',
                    title: 'Zara - Short Oxford Shirt - Blue - Xs - Female ', price: '2550', key: 2
                },

                {
                    uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIMdIX1wwxReVlZGcRAUNznazTy6cTMzpD8qMoTWvtBgJee8UkfH97kMH9SwMvWdETNIlS_UNRhufks7A-BnAMF-ZXGF1F14uyUw3wUqhSfeUGgAlzFWhHYRuvDbea5aHZu5-MGuNa&usqp=CAc',
                    title: 'H&M - Regular Fit Muslin resort shirt', price: '1590', key: 3
                },

                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/h/j/3xl-elep-primary-off-white-rare-rabbit-original-imah3whwzzdv6dfz.jpeg?q=70',
                    title: 'Men Printed Crew Neck Pure Cotton White T-Shirt', price: '3550', key: 4
                },

                {
                    uri: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvwaMg4NdEcSQr4TWI9mLwGkwvzIa2skzsw_3cUMd7AqpnJzge0PW3E7WvF4QDUn6c2z-BGXPlEdKf_k2WVyqS8Kht4zXoVhpYIMbpHrfjUdRLXsAeJXTPbw&usqp=CAE',
                    title: ' Eyebogler Men Self Design Casual', price: '590', key: 5
                },

                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/v/a/xs-holit-dusky-beige-rare-rabbit-original-imah3whwdnqsvfh7.jpeg?q=70',
                    title: 'Men Solid Polo Neck Pure Cotton Beige T-Shirt', price: '2998', key: 6
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/i/u/xs-nor-2-dusky-orange-rare-rabbit-original-imah5utzeyfpudgm.jpeg?q=70',
                    title: 'Men Embroidered Round Neck Cotton Blend Orange T-Shirt', price: '2999', key: 7
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/j/6/m-24a3089j3501i901-united-colors-of-benetton-original-imah5fkr9kbgfvpp.jpeg?q=70',
                    title: 'Men Colorblock Polo Neck Pure Cotton Blue T-Shirt', price: '2239', key: 8
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/t/n/xl-amber-dusky-blue-rare-rabbit-original-imah5utnegtsknt7.jpeg?q=70',
                    title: 'Men Graphic Print Polo Neck Cotton Blend Blue T-Shirt', price: '2235', key: 9
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/i/o/xl-carmelon-primary-dark-blue-rare-rabbit-original-imahyxztxzp5uqbb.jpeg?q=70',
                    title: 'Men Solid Polo Neck Cotton Blend Dark Blue T-Shirt', price: '2219', key: 10
                },

            ],
        },
        {
            id: 2,
            title: 'Women',
            data: [
                {
                    uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsbLFGtLIDan23ogeShHhiaBf9Qk8SHM3KkgdywPc_lge1T4EKJYAWgnvF732ntFJsqHV7r-KmoqcplLq45NtSqRXXOJCHvNzyuOlX2XdW6HwSuZeHbWjjM2du3X0_qkqWdjdkqzOwQ1E&usqp=CAc',
                    title: 'Leriya Fashion |Oversized Shirt for Women ', price: '1990', key: 1
                },
                {
                    uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxQ7b4tvtCDEyi5Rolo1WYlQyl7wWQeq5oV89MChdYXbn2R8d7a8Z6ITYpmOyHuKGYcJvms72dyPR1MYEW09v8XtInEMxUhSWoi4EiuszO1aY_K5wmN3eZlIQm4kkGmy-AdXMu-4Tq&usqp=CAc',
                    title: 'Zara - Short Oxford Shirt - Blue - Xs - Female ', price: '2550', key: 2
                },
                {
                    uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqtEIwWAZE_SMpiesqcCwN3NfQ9jr1bBcPaDcmRyLYbpkM1Z7Qd9LPFYurNeasSkg2iaJmV5CMfdzwwtXt6p29VLTZvBvagLVn6hJnvwA2zZooIRdRysC62sgmiR4ifKPDeCyeBpc&usqp=CAc',
                    title: 'Corset Style Puff Sleeve Floral Top', price: '990', key: 4
                },
            ],
        },
        {
            id: 3,
            title: 'Sports Wear',
            data: [
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/8/b/-original-imagyk8qaafzmfbc.jpeg?q=70',
                    title: 'Men Self Design Round Neck Polyester', price: '1200'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/k/k/xxl-dhaari-1029-dhaari-by-unique-creation-original-imaghrc8mgcqmwgh.jpeg?q=70',
                    title: 'Men Sporty Mandarin Collar Polyester', price: '2200'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/n/a/u/xs-no-62779201-puma-original-imah4kyyugzgjeqb.jpeg?q=70',
                    title: 'Men Printed Sports Jacket', price: '14449'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/f/l/xs-77505001-puma-original-imah2fcrunbzhac9.jpeg?q=70',
                    title: 'Men Printed Crew Neck Polyester Blue T-Shirt', price: '6999'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/y/t/i/xl-no-2032c944-403-asics-original-imah46hzzdert9bq.jpeg?q=70',
                    title: 'Women Solid Sports Jacket', price: '6999'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/x/z/xl-2012d075-001-asics-original-imah46hgyrywbvk7.jpeg?q=70',
                    title: 'Women Full Sleeve Solid Hooded Sweatshirt', price: '4999'
                },

            ],
        },
        {
            id: 4,
            title: 'Coat',
            data: [
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/suit/r/5/c/40-ridb00653-f5-raymond-original-imahf2cf9uyhdckj.jpeg?q=70',
                    title: 'Men 2 Piece Suit Self Design Suit', price: '6399'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/suit/d/n/3/40-rmdx02086-e7-raymond-original-imaggp7kqw3zzen3.jpeg?q=70',
                    title: 'Men 2 Piece Suit Solid Suit', price: '5499'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/suit/d/u/f/-original-imahyy6wuhfkfbzn.jpeg?q=70',
                    title: 'Men 2 Piece Suit Checkered Suit', price: '5999'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/suit/1/e/r/-original-imahyy6wxzdwmz7t.jpeg?q=70',
                    title: 'Men 2 Piece Suit Self Design Suit', price: '4999'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/suit/1/p/u/42-pisuonsf246175-peter-england-original-imagqxvrtzyagvq4.jpeg?q=70',
                    title: 'Men Single Breasted - 2 button Solid Suit', price: '5499'
                },

            ],
        },
        {
            id: 5,
            title: 'Teens',
            data: [
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/b/a/n/7-8-years-hft-23bfs-bl-hellcat-original-imah2dyzxvzyxgvj.jpeg?q=70',
                    title: 'Boys Graphic Print Cotton Blend Regular T Shirt   ', price: '1300'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/z/s/7/11-12-years-hft-23hr5-tq1-na-mu-blg-br-hellcat-original-imagn9y6dgzxgmgg.jpeg?q=70',
                    title: 'Boys Printed Cotton Blend Regular T Shirt', price: '470'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/9/l/l-slim-fit-stylish-look-branded-premium-quality-party-wear-shirt-original-imah2nyhnr5wq6km.jpeg?q=70',
                    title: 'Men Regular Fit Printed Cut Away Collar Casual Shirt', price: '450'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/0/y/6/3-4-years-kuctshrt242-kuchipoo-original-imah4n3nbcugpfet.jpeg?q=70',
                    title: 'Baby Girls Printed Cotton Blend Regular T Shirt ', price: '610'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/o/b/b/13-14-years-hft-23gfs3-be-sg-bl-hellcat-original-imah2efgqskrzku8.jpeg?q=70',
                    title: 'Girls Graphic Print Cotton Blend Regular T Shirt', price: '599'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/k/g/y/8-9-years-in-jung-gts-f-s-p1-inneb-original-imah2yc84hwvyt7p.jpeg?q=70',
                    title: 'Girls Solid, Printed Cotton Blend Regular T Shirt ', price: '400'
                },
            ],
        },
        {
            id: 6,
            title: 'Child',
            data: [
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/q/k/p/6-12-months-nn322-5132-nautinati-original-imah5ey5hecr8zuj.jpeg?q=70',
                    title: 'Baby Girls Printed Round Neck White Sweater', price: '593'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bodysuit-sleepsuit/p/p/e/na-3-6-months-gobs20-2492-pink-babygo-na-original-imahfua4ft9gggus.jpeg?q=70',
                    title: 'Romper For Baby Boys & Baby Girls Casual Printed Pure Cotton', price: '370'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/b/0/1/2-3-years-g101dkpk-dusky-pink-tiny-biny-original-imah35257f7mhkzg.jpeg?q=70',
                    title: 'Baby Girls Casual Top Pant', price: '299'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/h/k/c/3-4-years-fc133-493navyblue-fourfolds-original-imagxmf6zbtcdzfr.jpeg?q=70',
                    title: 'Baby Boys Party(Festive) Coat Trouser', price: '1170'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/x/v/8/18-24-months-1-no-110126688blue-pantaloons-baby-original-imagj96knykzfvmb.jpeg?q=70',
                    title: 'Baby Boys Printed Casual Jacket', price: '906'
                },
                {
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/y/n/t/4-5-years-23115-yellow-apple-original-imahynv9juvg37yy.jpeg?q=70',
                    title: 'Baby Girls Woven Round Neck Purple Sweater', price: '900'
                }

            ]
        },
    ];

    // Add unique IDs to every it
    screens.forEach(screen => {
        screen.data.forEach((item, index) => {
            item.id = `${screen.id}-${index}`;
        });
    });

    const screen = screens[paramData.data];



    return (

        <View style={{ backgroundColor: '#fdf6f1', flex: 1, marginBottom: 0 }}>
            <StatusBar backgroundColor={'#fdf6f1'}></StatusBar>


            <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center', marginBottom: 20, marginTop: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3114/3114883.png' }}
                    />
                </TouchableOpacity>
                <Text style={{ marginLeft: 20, textAlign: 'center' }}>{screen.title}</Text>
            </View>

            <View style={{}} >

                <FlatList
                    style={{ marginBottom: 55 }}
                    contentContainerStyle={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 20,
                        margin: 20,
                        marginTop: -2

                    }}
                    showsVerticalScrollIndicator={false}
                    data={screen.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', {
                                uri: item.uri,
                                title: item.title,
                                price: item.price,
                                id: item.id,
                            })}
                        >
                            <View style={styles.menCategoryList

                            }>
                                <Image source={{ uri: item?.uri }} style={
                                    styles.menCategoryProductImage
                                } />
                                <Text style={{ fontSize: 12, padding: 5 }}>{item.title}</Text>
                                <Text style={{ fontSize: 14, padding: 5 }}>₹ {item.price}</Text>
                            </View>

                        </TouchableOpacity>

                    )}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    menCategoryList: {
        width: 150,
        height: 250,
        backgroundColor: 'white',
        // margin: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 5,
        // marginHorizontal:20


    },
    menCategoryProductImage: {
        width: 150,
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'black'
    }
})