import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  Pressable,
  StyleSheet,
  TextInput,
  Modal,
  Image,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import ImagePicker from "react-native-image-crop-picker";
import moment from "moment";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import DatePicker from "react-native-date-picker";
import * as Images from "../.././constants/Images";
import Header from "../../Components/Header";
import Colors from "../../constants/Colors";
import Button from "../../Components/Button";
import { url } from "../../constants/url";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const countryData = [
  {
    name: "Afghanistan",
  },
  {
    name: "Albania",
  },
  {
    name: "Algeria",
  },
  {
    name: "Andorra",
  },
  {
    name: "Angola",
  },
  {
    name: "Antigua and Barbuda",
  },
  {
    name: "Argentina",
  },
  {
    name: "Armenia",
  },
  {
    name: "Australia",
  },
  {
    name: "Austria",
  },
  {
    name: "Azerbaijan",
  },
  {
    name: "Bahamas",
  },
  {
    name: "Bahrain",
  },
];

const PersonalInfo = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDate, setModalVisibleDate] = useState(false);
  const [modalVisibleCountry, setModalVisibleCountry] = useState(false);
  const [backarrow, setBackarrow] = useState(false);
  const [data, setData] = useState(true);
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState(new Date());
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("Male");
  const [token, setToken] = useState("");
  const [statusOne, setStatusOne] = useState(true);
  const [statusTwo, setStatusTwo] = useState(false);
  const [statusThree, setStatusThree] = useState(false);
  const [image, setImage] = useState("");

  const [load, setLoad] = useState(false);

  const [id, setId] = useState("");

  // console.log("date-==>", date);

  useEffect(() => {
    navigation.addListener("focus", () => {
      getUserInfo();
    });
  }, [getUserInfo]);

  const getUserInfo = async () => {
    const userData = await AsyncStorage.getItem("userData");
    let userDatax = JSON.parse(userData);
    console.log("userDatax personalinfo==>", userDatax);
    setToken(userDatax?.access_token);
    setId(userDatax?.data?._id);
    //setEmail(userDatax.data.email);
  };

  const CELL_COUNT = 5;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const GoBack = () => {
    navigation.goBack();
  };
  const TrainerFlow = async () => {
    await AsyncStorage.setItem("personalInfoTrainer", JSON.stringify("true"));
    navigation.navigate("Professioninfo");
  };
  const TraineeFlow = async () => {
    await AsyncStorage.setItem("personalInfoTrainee", JSON.stringify("true"));
    navigation.navigate("FitnessLevelProfile");
  };

  const userApiCalling = async (data) => {
    await AsyncStorage.setItem("userPersonalInfo", JSON.stringify(data));
    userMe();
  };

  const personalInfo = async () => {
    if (fullName === "") {
      ToastAndroid.show("Please Enter your Full Name.", ToastAndroid.SHORT);
    } else if (date === "") {
      ToastAndroid.show("Please Enter Date.", ToastAndroid.SHORT);
    } else if (country === "") {
      ToastAndroid.show("Please Enter your Country.", ToastAndroid.SHORT);
    } else if (state === "") {
      ToastAndroid.show("Please Enter your State.", ToastAndroid.SHORT);
    } else if (city === "") {
      ToastAndroid.show("Please Enter your City.", ToastAndroid.SHORT);
    } else if (gender === "") {
      ToastAndroid.show("Please Enter your Gender.", ToastAndroid.SHORT);
    } else {
      setLoad(true);

      await fetch(`${url}/personal`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: fullName,
          date_of_birth: date,
          country: country,
          state: state,
          city: city,
          gender: gender,
        }),
      })
        .then((res) => res.json())
        .then((res2) => {
          setLoad(false);
          console.log("body===>", res2);
          console.log("ye ha Personal info api ka response", res2);
          console.log(res2.message);
          if (res2.message === "personal info create successfully") {
            ToastAndroid.show("Personal info Done", ToastAndroid.LONG);
            userApiCalling(res2.data);
          } else {
            alert(res2.errors);
          }
        })
        .catch((error) => {
          setLoad(false);
          alert("Something Went Wrong");
          console.log(error);
        });
    }
  };
  const userMe = async () => {
    setLoad(true);

    await fetch(`${url}/user/me/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res2) => {
        setLoad(false);
        console.log("ye ha User me api ka response", res2);
        if (res2.success === true) {
          if (res2.user.role === "trainer") {
            ToastAndroid.show("Done", ToastAndroid.LONG);
            TrainerFlow();
          } else if (res2.user.role === "trainee") {
            ToastAndroid.show("Done", ToastAndroid.LONG);
            TraineeFlow();
          }
        } else {
          alert(res2.errors);
        }
      })
      .catch((error) => {
        setLoad(false);
        alert("Something Went Wrong");
        console.log(error);
      });
  };

  const choosePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.4,
    })
      .then((file) => {
        console.log("file===>", file);
        setImage(file.path);
        // let imageRef = firebase.storage().ref('/' + file);
        // imageRef.getDownloadURL().then(url => {
        //   console.log('url===>', url);
        //   //from url you can fetched the uploaded image easily
        //   this.setState({profileImageUrl: url});
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImageOnCloud = async () => {
    const zzz = new FormData();
    zzz.append("file", image);
    zzz.append("upload_preset", "uiana0q6");
    zzz.append("cloud_name", "zacodders");
    // if (image == '') {
    //   zzz.append('profileImage', 'hh');
    // } else {
    //   zzz.append('profileImage', {
    //     type: 'image/png',
    //     uri: image,
    //     name: `image.png`,
    //   });
    // }

    console.log("zzz====================>", zzz);

    await fetch("https://api.cloudinary.com/v1_1/uiana0q6/image/upload", {
      method: "POST",
      body: zzz,
    })
      .then((res) => res.json())
      .then((res2) => {
        setLoad(false);
        console.log("cloud api responnse", res2);
        // //console.log('id===>', res2.data._id);
        // console.log(res2.message);
        // if (res2.message === 'success') {
        //   // storeData('userToken', res2.data);
        //   // meApi(res2?.access_token);
        //   navigation.navigate('Login');
        // } else {
        //   toast(res2.message);
        // }
      })
      .catch((err) => {
        setLoad(false);
        console.log("catch" + err);
      });
  };

  return (
    <View style={styles.container}>
      {/*Header rect start*/}
      <View style={styles.header}>
        <View style={styles.fixeheight}>
          <Header navigation={navigation} onPress={GoBack} />
        </View>
        <View style={styles.fixeheight1}>
          <View style={styles.PersonalinfoView}>
            <View style={{ width: "60%", alignItems: "flex-start" }}>
              <TouchableOpacity
                onPress={() => {
                  uploadImageOnCloud();
                }}
              >
                <Text style={styles.PersonalinfoText}>Personal Info</Text>
              </TouchableOpacity>
              <Text style={styles.filldetailsText}>Fill in your details</Text>
            </View>
            <View style={styles.imageView}>
              <TouchableOpacity
                onPress={() => {
                  choosePhotoFromCamera();
                }}
              >
                {image === "" ? (
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 200 / 2,
                      overflow: "hidden",
                      borderWidth: 1,
                      borderColor: "grey",
                    }}
                    source={Images.Profile}
                  />
                ) : (
                  <Image
                    style={styles.imagestyle}
                    source={{
                      uri: image,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/*Header rect end*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.inputTopView}>
            <View style={styles.inputtopviews}>
              <View style={styles.inputnameView}>
                <Text style={styles.inputnameText}>Fullname</Text>
              </View>
              <View style={styles.textinputView}>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Enter Fullname"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputTopView}>
            <Pressable
              onPress={() => setModalVisibleDate(true)}
              style={styles.inputtopviews}
            >
              <View style={styles.inputnameView}>
                <Text style={styles.inputnameText}>Date of birth</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  borderColor: Colors.white,
                  height: 40,
                }}
              >
                <Text style={styles.DateText}>
                  {moment(date).format("DD-MM-YYYY")}
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inputTopView}>
            <Pressable
              style={styles.inputtopviews}
              onPress={() => {
                setModalVisibleCountry(true);
              }}
            >
              <View style={styles.inputnameView}>
                <Text style={styles.inputnameText}>Country</Text>
              </View>
              <View style={styles.textinputView}>
                <Text
                  style={{
                    color: Colors.white,
                    marginTop: 5,
                    marginLeft: 10,
                    fontSize: RFValue(12, 580),
                    fontFamily: "poppins-regular",
                  }}
                >
                  {country}
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inputTopView}>
            <View style={styles.inputtopviews}>
              <View style={styles.inputnameView}>
                <Text style={styles.inputnameText}>State</Text>
              </View>
              <View style={styles.textinputView}>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Enter State"
                  value={state}
                  onChangeText={setState}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputTopView}>
            <View style={styles.inputtopviews}>
              <View style={styles.inputnameView}>
                <Text style={styles.inputnameText}>City</Text>
              </View>
              <View style={styles.textinputView}>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Enter City"
                  value={city}
                  onChangeText={setCity}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.inputTopView}>
          <Pressable onPress={() => setModalVisible(true)}>
            <View style={styles.genderTopview}>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.genderText}>Gender</Text>
              </View>
              <View
                style={{
                  width: "40%",
                  borderColor: "#fff",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.inputnameText}>{gender}</Text>
              </View>
              <View style={styles.iconView}>
                <Entypo
                  name="chevron-down"
                  style={{
                    fontSize: 20,
                    color: Colors.white,
                  }}
                />
              </View>
            </View>
          </Pressable>
        </View>

        {/*Modal Start*/}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "flex-start",
                    }}
                  >
                    <View style={styles.TopView}>
                      <View style={styles.topView}>
                        <View
                          style={{
                            width: "100%",
                            height: 60,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={styles.Gendertexts}>
                            Gender
                            <Text style={styles.genderonetext}>
                              (Select one)
                            </Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.opercard}>
                      <Pressable
                        style={styles.box}
                        onPress={() => {
                          setGender("Male");
                          setModalVisible(false);
                          setStatusOne(true);
                          setStatusTwo(false);
                          setStatusThree(false);
                        }}
                      >
                        <View
                          style={[
                            statusOne ? styles.BoxViewBoder : styles.inner,
                          ]}
                        >
                          <Image source={Images.Vector} />
                          <Text style={styles.maletext}>Male</Text>
                        </View>
                      </Pressable>

                      <Pressable
                        style={styles.box1}
                        onPress={() => {
                          setGender("Female");
                          setModalVisible(false);
                          setStatusOne(false);
                          setStatusTwo(true);
                          setStatusThree(false);
                        }}
                      >
                        <View
                          style={[
                            statusTwo ? styles.BoxViewBoder : styles.inner,
                          ]}
                        >
                          <Image source={Images.Vector2} />
                          <Text style={styles.maletext}>Female</Text>
                        </View>
                      </Pressable>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: "30%",
                        marginTop: 20,
                      }}
                    >
                      <Pressable
                        style={styles.otherView}
                        onPress={() => {
                          setGender("Other");
                          setModalVisible(false);
                          setStatusOne(false);
                          setStatusTwo(false);
                          setStatusThree(true);
                        }}
                      >
                        <View
                          style={[
                            statusThree
                              ? styles.oternameviewBorder
                              : styles.oternameview,
                          ]}
                        >
                          <Text style={styles.otherText}>Other</Text>
                        </View>
                      </Pressable>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        {/* Modal End*/}
        {/*modalVisibleDate Start*/}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisibleDate}
            onRequestClose={() => {
              setModalVisibleDate(false);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalViewdate}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "flex-start",
                    }}
                  >
                    <View style={styles.TopView}>
                      <View style={styles.topView}>
                        <View style={styles.cancelView}>
                          <Pressable
                            onPress={() => setModalVisibleDate(false)}
                            style={styles.canceldoneView}
                          >
                            <Text style={styles.TextCancelDone}>Cancel</Text>
                          </Pressable>
                          <View style={styles.DOBView}>
                            <Text style={styles.TextDOB}>Date of Birth</Text>
                          </View>
                          <Pressable
                            onPress={() => {
                              setModalVisibleDate(false);
                              setData(false);
                            }}
                            style={styles.canceldoneView}
                          >
                            <Text style={styles.TextCancelDone}>Done</Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={styles.TopView}>
                      <View style={styles.topView}>
                        <DatePicker
                          mode="date"
                          date={date}
                          value={data}
                          style={styles.DatePicker}
                          onDateChange={(date) => {
                            setDate(date);
                          }}
                          onChange={() => setData(data)}
                        />
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        {/* modalVisibleDate End*/}
        <View style={{ paddingVertical: 10, alignItems: "center" }}>
          <Button
            navigation={navigation}
            // label={"Next"} onPress={NextScreen}
            label={
              load === true ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                "NEXT"
              )
            }
            onPress={() => {
              if (load === true) {
              } else {
                personalInfo();
              }
            }}
          />
        </View>
      </ScrollView>
      {/*country list model  Start*/}
      <View style={styles.centeredViewCountry}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisibleCountry}
          onRequestClose={() => {
            setModalVisibleCountry(false);
          }}
        >
          <View style={styles.centeredViewCountry}>
            <View style={styles.modalViewCountry}>
              <View
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "lightgrey",
                  alignItems: "center",
                  paddingVertical: 15,
                  flexDirection: "row",
                }}
              >
                <View style={{ width: "10%" }} />
                <View style={{ width: "80%", alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: RFValue(14, 580),
                      fontFamily: "poppins-Bold",
                      color: Colors.black,
                    }}
                  >
                    Select Country
                  </Text>
                </View>
                <Pressable
                  style={{
                    width: "10%",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setModalVisibleCountry(false);
                  }}
                >
                  <Ionicons
                    name="close"
                    style={{
                      fontSize: 20,
                      color: Colors.black,
                    }}
                  />
                </Pressable>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {countryData.map((data, i) => (
                  <Pressable
                    style={{
                      width: "100%",
                      borderBottomWidth: 1,
                      flexDirection: "row",
                      paddingVertical: 10,
                      borderColor: "lightgrey",
                    }}
                    key={i}
                    onPress={() => {
                      setCountry(data.name);
                      setModalVisibleCountry(false);
                    }}
                  >
                    <View
                      style={{
                        width: "10%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          fontFamily: "poppins-SemiBold",
                        }}
                      >
                        {i + 1} .
                      </Text>
                    </View>
                    <View style={{ width: "90%" }}>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          fontFamily: "poppins-Regular",
                          color: Colors.black,
                        }}
                      >
                        {data.name}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      {/* Country list model*/}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
    paddingBottom: Platform.OS === "ios" ? 0 : 0,
  },
  header: {
    width: "100%",
    height: 150,
  },
  fixeheight: {
    height: 50,
    borderBottomWidth: 0.5,
    justifyContent: "center",
    borderColor: "lightgrey",
    width: "100%",
    alignItems: "center",
  },
  fixeheight1: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "100%",
    marginTop: 20,
  },
  TopView: {
    width: "100%",
    alignItems: "center",
  },
  topView: { width: "90%" },
  topView1: { width: "90%", alignItems: "center" },
  inner: {
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    margin: 10,
    height: 130,
    width: 130,
    borderRadius: 25,
    flexDirection: "column",
  },
  DatePicker: {
    height: 250,
  },
  opercard: {
    marginTop: 10,
    width: "88%",
    alignSelf: "center",
    flexDirection: "row",
  },
  box: {
    width: "50%",
    alignItems: "flex-start",
  },
  BoxViewBoder: {
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    margin: 10,
    height: 130,
    width: 130,
    borderRadius: 25,
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "#ff0000",
  },
  box1: {
    width: "50%",
    alignItems: "flex-end",
  },
  inputEmail: {
    borderRadius: 10,
    width: "100%",
    height: 38,
    paddingLeft: 10,
    fontSize: RFValue(10, 580),
    fontFamily: "poppins-regular",
    color: Colors.white,
  },
  inputPassword: {
    borderRadius: 10,
    width: "100%",
    height: 38,
    paddingLeft: 10,
    fontSize: RFValue(10, 580),
    fontFamily: "poppins-regular",
    color: Colors.white,
  },
  iconStyle: { fontSize: 27, color: Colors.lightGray, marginTop: 20 },
  btn: {
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 10,
    color: Colors.infos,
    backgroundColor: Colors.bgRedBtn,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "100%",
    marginBottom: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: 1,
  },
  modalView: {
    margin: 0,
    width: "100%",
    height: "42%",
    margin: 5,
    backgroundColor: Colors.white,
    borderRadius: 7,
    padding: 0,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 6.84,
    elevation: 5,
  },
  modalViewdate: {
    margin: 0,
    width: "100%",
    height: "38%",
    margin: 5,
    backgroundColor: Colors.white,
    borderRadius: 7,
    padding: 0,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 6.84,
    elevation: 5,
  },
  centeredViewCountry: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  modalViewCountry: {
    margin: 0,
    width: "95%",
    height: "60%",
    margin: 5,
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 0,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 6.84,
    elevation: 5,
  },
  cancelView: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 28 },
  cell: {
    width: 45,
    height: 35,
    lineHeight: 38,
    fontSize: 24,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: Colors.black,
    textAlign: "center",
  },
  focusCell: {
    borderColor: Colors.black,
  },
  TextDOB: {
    fontSize: RFValue(18, 580),
    fontFamily: "Poppins-SemiBold",
    color: Colors.black,
  },
  TextCancelDone: {
    fontFamily: "poppins-Regular",
    color: Colors.black,
    fontSize: RFValue(12, 580),
  },
  PersonalinfoView: {
    width: "90%",
    flexDirection: "row",
  },
  PersonalinfoText: {
    fontSize: RFValue(23, 580),
    fontFamily: "Poppins-Bold",
    color: Colors.black,
  },
  filldetailsText: {
    fontSize: RFValue(16, 580),
    fontFamily: "poppins-regular",
    color: Colors.gray,
  },
  imageView: {
    width: "40%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  imagestyle: {
    width: 80,
    height: 80,
    borderRadius: 200 / 2,
  },
  inputTopView: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  inputtopviews: {
    width: "90%",
    height: 60,
    backgroundColor: Colors.black,
    borderRadius: 8,
  },
  inputnameView: {
    width: "100%",
    marginTop: 3,
    paddingLeft: 10,
    borderRadius: 8,
  },
  inputnameText: {
    color: Colors.white,
    fontSize: RFValue(9, 580),
    fontFamily: "poppins-regular",
  },
  textinputView: {
    width: "100%",
    borderColor: Colors.white,
    flexDirection: "row",
  },
  genderTopview: {
    width: "90%",
    backgroundColor: Colors.black,
    borderRadius: 10,
    height: 60,
    flexDirection: "row",
  },
  genderText: {
    fontSize: RFValue(13, 580),
    fontFamily: "poppins-regular",
    color: Colors.white,
    left: 10,
  },
  iconView: {
    width: "10%",
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Gendertexts: {
    color: Colors.black,
    fontSize: RFValue(16, 580),
    fontFamily: "Poppins-ExtraBold",
  },
  genderonetext: {
    fontSize: RFValue(10, 520),
    color: "#414143",
    fontFamily: "poppins-regular",
  },
  maletext: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: RFValue(9, 580),
    fontFamily: "poppins-regular",
  },
  oternameview: {
    padding: 15,
    borderRadius: 14,
    width: "80%",
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  oternameviewBorder: {
    padding: 15,
    borderRadius: 14,
    width: "80%",
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 2,
    borderColor: "#ff0000",
  },
  otherText: {
    color: Colors.white,
    fontSize: RFValue(16, 580),
    fontFamily: "poppins-regular",
  },
  otherView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  canceldoneView: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  DOBView: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnmainView: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  nextText: {
    color: Colors.white,
    fontSize: RFValue(16, 580),
    fontFamily: "poppins-regular",
  },
  DateText: {
    fontSize: RFValue(12, 580),
    fontFamily: "Poppins-Regular",
    color: Colors.white,
    textAlign: "left",
    left: 10,
  },
});
export default PersonalInfo;
