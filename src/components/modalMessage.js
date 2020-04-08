import React from 'react';
import { Text, View, Icon } from 'native-base';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modal";
import { strings, Color, Screen, Font } from '@api/localization';
import { CustomButton } from '@components/customButton';
import { BarcodeView } from 'react-native-barcode-zxing';
import QRCode from 'react-native-qrcode-svg';

const ModalMessage = props => {
    return (
        <Modal style={styles.content} isVisible={props.isModalVisible} animationOutTiming={500}>
            <TouchableWithoutFeedback onPress={props.onModalCancel}>
                {props.type != 'failed' ?
                    <View>
                        <Image
                            resizeMode='cover'
                            source={require('@assets/bg_success.png')}
                            style={{ width: Screen.SCREEN_WIDTH, height: Screen.SCREEN_HEIGHT }} />
                        <View style={{ position: 'absolute', bottom: 0, marginHorizontal: 30, marginBottom: 20 }}>
                            <Text style={[styles.textModal, { color: props.colorText, fontFamily: Font.MEDIUM }]}>{props.txtModal}</Text>
                        </View>
                    </View> :
                    <View style={{ width: Screen.SCREEN_WIDTH, height: Screen.SCREEN_HEIGHT }}>
                        <Image
                            resizeMode='contain'
                            source={require('@assets/bg_failed.png')}
                            style={{ width: Screen.SCREEN_WIDTH, transform: [{ scale: 1.2 }] }} />
                        <Image
                            resizeMode='contain'
                            style={{
                                width: Screen.SCREEN_WIDTH * 0.41,
                                height: Screen.SCREEN_HEIGHT * 0.41,
                                marginLeft: 30,
                                marginTop: -Screen.SCREEN_WIDTH * 0.27
                            }}
                            source={require('@assets/ic_incorrect.png')} />
                        <View style={{ marginHorizontal: 30, marginBottom: 20, marginTop: -30 }}>
                            <Text style={[styles.textModal, { color: props.colorText, fontFamily: Font.MEDIUM }]}>{props.txtModal}</Text>
                        </View>
                    </View>
                }
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const ModalConfirmation = props => {
    return (
        <Modal isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={styles.contentModal}>
                <View>
                    <Text style={styles.txtM}>{props.titleModal}</Text>
                    <View style={styles.lineHorizontal}></View>
                    {props.sumButton == 1 ?
                        //CONFIRMATION ONE BUTTON
                        <Text style={styles.txtM} onPress={props.closeModal}>{props.txtButton || strings.yes}</Text> :
                        //CONFIRMATION TWO BUTTON                    
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.txtM, { flex: 1 }]} onPress={props.closeModal}>{strings.no}</Text>
                            <View style={styles.lineVertical}></View>
                            <Text style={[styles.txtB, { flex: 1, color: props.btnColor ? props.btnColor : Color.TXT_LIGHT_GREY }]}
                                onPress={props.processModal}>{strings.yes}</Text>
                        </View>}
                </View>
            </View>
        </Modal>
    );
}

const ModalShopping = props => {
    return (
        <Modal isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={styles.contentModal}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={props.imgModal ? props.imgModal : require('@assets/ic_checklist.png')}
                        resizeMode={'contain'}
                        style={{ width: Screen.SCREEN_WIDTH * 0.47, height: Screen.SCREEN_WIDTH * 0.47, margin: 30 }}
                    />
                </View>
                {props.type == 'shop' ?
                    <Text style={[styles.txtAdd, { textAlign: 'center', marginHorizontal: 25, marginVertical: 10 }]}>
                        {strings.addOrder} <Text style={{ color: Color.GREEN }}>{strings.cart}</Text>
                    </Text> :
                    <Text style={[styles.txtAdd, { textAlign: 'center', marginHorizontal: 25, marginVertical: 10 }]}>
                        {props.txtModal}
                    </Text>
                }
                <View style={{ margin: 20 }}>
                    <CustomButton
                        isShadow={true}
                        backgroundColor={Color.PINK}
                        disabled={false}
                        textButton={props.txtOnPressPink}
                        onPress={props.onPressPink} />
                    {props.type == 'shop' ? <View style={{ marginTop: 20, marginBottom: 10 }}>
                        <CustomButton
                            isShadow={true}
                            disabled={false}
                            textButton={strings.goTo + " " + strings.cart}
                            onPress={props.onPressGreen} />
                    </View> : null}
                </View>
            </View>
        </Modal>
    );
}

const ModalBottom = props => {
    return (
        <Modal onBackdropPress={props.dismiss} style={{ margin: 0 }} isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={styles.contentBottom}>
                {props.renderContent}
            </View>
        </Modal>
    );
}

const ModalBarcode = props => {
    return (
        <Modal onBackdropPress={props.dismiss} style={{ margin: 0 }} isVisible={props.isModalVisible} animationOutTiming={500}>
            <View style={[styles.contentModal, { margin: 20 }]}>
                <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
                    <Text style={[styles.txtBarcode, { marginBottom: 20 }]}>{props.title}</Text>
                    <View style={[styles.contentCenter, { marginBottom: 0 }]}>
                        {props.typeCode == 'QR_CODE' ?
                            <View style={[styles.contentCenter, { height: Screen.SCREEN_WIDTH * 0.55, width: Screen.SCREEN_WIDTH * 0.55 }]}>
                                <QRCode
                                    value={props.custNumber}
                                    size={Screen.SCREEN_WIDTH * 0.55}
                                    logoSize={40}
                                    logo={require('@assets/ic_logo.png')} />
                            </View> :
                            // <BarcodeView
                            //     text={props.custNumber}
                            //     format={props.typeCode ? props.typeCode : 'QR_CODE'}
                            //     style={{ height: Screen.SCREEN_WIDTH * 0.55, width: Screen.SCREEN_WIDTH * 0.55 }} /> :
                            <BarcodeView
                                text={props.custNumber}
                                format={props.typeCode ? props.typeCode : 'CODE_128'}
                                style={{ height: Screen.SCREEN_WIDTH * 0.2, width: Screen.SCREEN_WIDTH * 0.7 }} />}
                    </View>
                </View>
                <View style={[styles.contentCenter, { marginBottom: 10 }]}>
                    <Icon type={'Ionicons'} name={'ios-arrow-down'}
                        onPress={props.dismiss}
                        style={{ fontSize: 20, color: Color.TXT_LIGHT_GREY }} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 0,
        padding: '7%'
    },
    contentModal: {
        backgroundColor: "white",
        borderRadius: 15,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    contentBottom: {
        width: Screen.SCREEN_WIDTH,
        padding: 20,
        backgroundColor: "white",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        bottom: 0,
        position: 'absolute'
    },
    textModal: {
        fontSize: 20,
        fontFamily: Font.LIGHT,
    },
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center',
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
    txtAdd: {
        fontFamily: Font.MEDIUM,
        fontSize: 18,
        color: Color.GREY_CART
    },
    txtBarcode: {
        fontSize: 18,
        color: Color.TXT_LIGHT_GREY,
        fontFamily: Font.LIGHT
    }
});
export { ModalMessage, ModalConfirmation, ModalShopping, ModalBottom, ModalBarcode }