import React from 'react';
import { Text, View, Icon, Content } from 'native-base';
import { StyleSheet, FlatList, TouchableWithoutFeedback, ImageBackground, Image } from 'react-native';
import Modal from "react-native-modal";
import { strings, Color, Font, Screen } from '@api/localization';
import { ScrollView } from 'react-native-gesture-handler';

const ModalConfirmation = props => {
    return (
        <Modal isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={styles.contentModal}>
                <View>
                    <Text style={styles.txtM}>{props.titleModal}</Text>
                    <View style={styles.lineHorizontal}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.txtM, { flex: 1 }]} onPress={props.closeModal}>{strings.no}</Text>
                        <View style={styles.lineVertical}></View>
                        <Text style={[styles.txtB, { flex: 1, color: props.btnColor ? props.btnColor : Color.TXT_LIGHT_GREY }]}
                            onPress={props.processModal}>{strings.yes}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const ModalList = (props) => {
    return (
        <Modal isVisible={props.isModalVisible} animationOutTiming={500} style={{ margin: 0 }}>
            <View style={styles.FullScreenModal}>
                <View>
                    {/* <Text style={styles.txtM}>{props.titleModal}</Text>
                    <View style={styles.lineHorizontal}></View> */}
                    <View style={{
                        // position: 'absolute',
                        top: 0,
                        justifyContent: 'center',
                        width: Screen.SCREEN_WIDTH,
                        marginLeft: 10,
                        marginTop: 10,
                        // height: Platform.OS == 'android' ? 56 : 64, backgroundColor: 'white'
                        backgroundColor: 'white'
                    }}>
                        <TouchableWithoutFeedback onPress={props.closeModal}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon
                                    type='Ionicons' name="ios-arrow-back"
                                    style={{ color: Color.TXT_GREY, alignItems: 'center' }}
                                />
                                <Text style={{ fontSize: 18, color: Color.TXT_GREY, marginLeft: 10, fontFamily: Font.LIGHT }}>{strings.back.toLowerCase()}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={{ fontFamily: Font.BOLD, fontSize: 24, color: '#4A4A4A', marginTop: 8, marginBottom: 6 }}>{props.titleModal}</Text>
                    </View>
                    <FlatList
                        data={props.dataList}
                        keyExtractor={(x, i) => i.toString()}
                        renderItem={({ item }) =>
                            <View style={{ borderBottomWidth: 0.5, marginHorizontal: 10, borderBottomColor: '#E8E8E8' }}>
                                <TouchableWithoutFeedback onPress={() => props.handleClick(item)}>
                                    <Text style={{ color: '#434343', fontFamily: Font.LIGHT, fontSize: 18, paddingVertical: 20 }}>{item[props.keyList]}</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        }
                    />
                </View>
            </View>
        </Modal>
    );
}

const ModalDesc = (props) => {
    return (
        <Modal isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={styles.contentModal}>
                {/* <Text style={styles.txtM}>{props.titleModal}</Text>
                    <View style={styles.lineHorizontal}></View> */}
                <View style={{
                    // position: 'absolute',
                    top: 0,
                    justifyContent: 'center',
                    marginLeft: 10,
                    marginTop: 10,
                    // height: Platform.OS == 'android' ? 56 : 64, backgroundColor: 'white'
                    backgroundColor: 'white'
                }}>
                    <TouchableWithoutFeedback onPress={props.closeModal}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                type='Ionicons' name="ios-arrow-back"
                                style={{ color: Color.TXT_GREY, alignItems: 'center' }}
                            />
                            <Text style={{ fontSize: 18, color: Color.TXT_GREY, marginLeft: 10, fontFamily: Font.LIGHT }}>{strings.back.toLowerCase()}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: 'white', height: Screen.SCREEN_WIDTH * 0.46, marginVertical: 20, borderRadius: 15 }}>
                        <ImageBackground
                            source={{ uri: props.image }}
                            resizeMethod='resize'
                            style={styles.imageBg}
                            resizeMode='stretch'
                            opacity={1}
                            imageStyle={{ borderRadius: 10 }}
                        >
                            <Image style={styles.imageAda} source={require('../assets/logo.png')} />
                            <View style={{ marginTop: Screen.SCREEN_WIDTH * 0.15, marginHorizontal: 10 }}>

                                <Text numberOfLines={1} style={[styles.textWithShadow, { color: 'white', fontSize: 15 }]} >{props.name}</Text>

                                <Text style={[styles.textWithShadow, { color: 'white', fontSize: 15 }]} >1823 - 1238 - 8432 - 2342</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={{ marginHorizontal: 20, marginBottom: 10, fontSize:18, fontFamily:Font.BOLD }}>{props.level}</Text>
                    <Text style={{ marginHorizontal: 20, marginBottom: 20, fontSize:15, fontFamily:Font.LIGHT }}>{props.desc}</Text>
                </ScrollView>
            </View>
        </Modal>
    );
}


const ModalUpdate = props => {
    return (
        <Modal isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={styles.contentModal}>
                <View>
                    <Text style={styles.txtT}>{strings.updateTitle}</Text>
                    <Text style={styles.txtM}>{props.titleModal}</Text>
                    <View style={styles.lineHorizontal}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.txtM, { flex: 1 }]} onPress={props.closeModal}>{strings.later}</Text>
                        <View style={styles.lineVertical}></View>
                        <Text style={[styles.txtM, { flex: 1, color: props.btnColor ? props.btnColor : Color.TXT_LIGHT_GREY }]}
                            onPress={props.processModal}>{strings.update}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const ModalConfirmOneBtn = props => {
    return (
        <Modal isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={styles.contentModal}>
                <View>
                    <Text style={styles.txtM}>{props.titleModal}</Text>
                    <View style={styles.lineHorizontal}></View>
                    <Text style={styles.txtM} onPress={props.closeModal}>{props.txtButton}</Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    contentModal: {
        backgroundColor: "white",
        borderRadius: 15,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    FullScreenModal: {
        backgroundColor: "white",
        borderColor: "rgba(0, 0, 0, 0.1)",
        flex: 1,
        padding: 10
    },
    txtT: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Color.TXT_LIGHT_GREY,
        fontFamily: Font.LIGHT
    },
    txtM: {
        padding: 15,
        fontSize: 14,
        textAlign: 'center',
        color: Color.TXT_LIGHT_GREY,
        fontFamily: Font.LIGHT
    },
    txtB: {
        padding: 15,
        fontSize: 14,
        textAlign: 'center',
        color: Color.TXT_BLUE,
        fontFamily: Font.LIGHT
    },
    lineHorizontal: {
        height: 1,
        marginTop: 5,
        backgroundColor: Color.LINE,
    },
    lineVertical: {
        width: 1,
        height: 'auto',
        backgroundColor: Color.LINE,
    },
    imageBg: {
        height: Screen.SCREEN_WIDTH * 0.46,
        width: null,
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        backgroundColor: "grey",
    },
    imageAda: {
        width: 71,
        height: 28,
        marginLeft: 10,
        marginVertical: 10
    },
    textWithShadow: {
        color: '#FFFFFF',
        textShadowColor: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    }
});

export { ModalConfirmation, ModalUpdate, ModalConfirmOneBtn, ModalList, ModalDesc }