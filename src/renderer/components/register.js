import Vue from 'vue'
import SubscribeModal from './SubscribeModal'
import SubscribeToolbar from './SubscribeToolbar'
import AppIcon from './AppIcon'
import ArticleToolbar from './ArticleToolbar'
import ArticleDetail from './ArticleDetail'
import ArticleList from './ArticleList'
import ArticleListItem from './ArticleListItem'
import BouncingLoader from './BouncingLoader'
import ImportModal from './ImportModal'
import SettingsModal from './SettingsModal'
import MarkReadModal from './MarkReadModal'
import SyncSettingsModal from './SyncSettingsModal'
import AddAccountModal from './AddAccountModal'
import EditSubscriptionModal from './EditSubscription'
import EditFeedModal from './EditFeed'
import EditCategoryModal from './EditCategory'
import FeedbinModal from './FeedbinModal'
import FeedMix from './FeedMix'

export default {
  registerComponents () {
    Vue.component('subscribe-toolbar', SubscribeToolbar)
    Vue.component('subscribe-modal', SubscribeModal)
    Vue.component('feather-icon', AppIcon)
    Vue.component('article-list', ArticleList)
    Vue.component('article-item', ArticleListItem)
    Vue.component('article-toolbar', ArticleToolbar)
    Vue.component('article-detail', ArticleDetail)
    Vue.component('loader', BouncingLoader)
    Vue.component('import-modal', ImportModal)
    Vue.component('settings-modal', SettingsModal)
    Vue.component('markallread-modal', MarkReadModal)
    Vue.component('sync-settings', SyncSettingsModal)
    Vue.component('edit-subscription', EditSubscriptionModal)
    Vue.component('feed-mix', FeedMix)
    Vue.component('edit-feed', EditFeedModal)
    Vue.component('edit-category', EditCategoryModal)
    Vue.component('add-account', AddAccountModal)
    Vue.component('feedbin-modal', FeedbinModal)
  }
}
