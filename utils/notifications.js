import { AsyncStorage } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "Flashcards_Notification";

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
      Notifications.cancelAllScheduledNotificationsAsync
    );
}
  
export  function createNotification() {
    return {
      title: "Quiz Attempts",
      body: "Remember to Complete One Quiz Today",
      ios: {
        sound: true
      },
      android: {
        sound: true,
        priority: "high",
        sticky: false,
        vibrate: true
      }
    };
  }
  
  export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then(data => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
            if (status === "granted") {
              Notifications.cancelAllScheduledNotificationsAsync();
  
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(11);
              tomorrow.setMinutes(0);
  
              Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: tomorrow,
                repeat: "day"
              });
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
        }
      });
  }