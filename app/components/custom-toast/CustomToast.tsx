import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { View, Animated } from "react-native";
import { styles } from "./CustomToastStyle";
import AppText from "../app-text/AppText";
import { capitalizeFLetter } from "../../utils";

interface ToastProps {
  duration?: number;
}

export interface ToastRef {
  showToast: (
    message: string,
    type?: "SUCCESS" | "ERROR" | "WARNING" | "INFO"
  ) => void;
}

const AnimatedToast = forwardRef<ToastRef, ToastProps>(
  ({ duration = 3000 }, ref) => {
    const translateY = useRef(new Animated.Value(-150)).current;
    const [message, setMessage] = useState<string>("");
    const [type, setType] = useState<"SUCCESS" | "ERROR" | "WARNING" | "INFO">(
      "INFO"
    );
    const [visible, setVisible] = useState<boolean>(false);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

    const toastColors = useMemo(
      () => ({
        SUCCESS: "#237D06",
        ERROR: "#DB1415",
        WARNING: "#F0C100",
        INFO: "#2D60E5",
      }),
      []
    );

    const bgColors = useMemo(
      () => ({
        SUCCESS: "#E7F4E7",
        ERROR: "#FBE8E9",
        WARNING: "#FDF9E7",
        INFO: "#ECF0FD",
      }),
      []
    );

    const showToast = useCallback(
      (
        msg: string,
        toastType: "SUCCESS" | "ERROR" | "WARNING" | "INFO" = "INFO"
      ) => {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }

        setMessage(msg);
        setType(toastType);
        setVisible(true);

        Animated.timing(translateY, {
          toValue: 50,
          duration: 200,
          useNativeDriver: true,
        }).start();

        const timeoutId = setTimeout(() => {
          Animated.timing(translateY, {
            toValue: -150,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setVisible(false);
          });
        }, duration);

        setHideTimeout(timeoutId);
      },
      [duration, hideTimeout, translateY]
    );

    useImperativeHandle(ref, () => ({
      showToast,
    }));

    const sideLine = toastColors[type];
    const backgroundColor = bgColors[type];
    const title = capitalizeFLetter(type);

    return (
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{ translateY }],
            backgroundColor,
            opacity: visible ? 1 : 0,
          },
        ]}
      >
        <View style={[styles.sideBar, { backgroundColor: sideLine }]} />
        <View>
          <AppText style={styles.typeText}>{title}</AppText>
          <AppText style={styles.toastText}>{message}</AppText>
        </View>
      </Animated.View>
    );
  }
);

export default AnimatedToast;
