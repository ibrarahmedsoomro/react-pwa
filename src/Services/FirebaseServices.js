export function confiqureNotification () {
    Notification.requestPermission().then((Promise)=> {
        console.log(permission)
    })
}